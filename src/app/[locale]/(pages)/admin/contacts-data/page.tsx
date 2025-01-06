"use client";

import React, { useEffect, useRef, useState } from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";

import { DownloadTableExcel } from "react-export-table-to-excel";

import HeaderDropDown from "@/components/layouts/HeaderDropDown";
// import { useToken } from "@/context/TokenContext";
import { deleteMessage } from "@/lib/api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { authSelector, contactsSelector } from "@/redux/store";
import { toast } from "react-toastify";
import {
  deleteContactMessage,
  getContactMessages,
} from "@/redux/contacts/contactSlice";
import { isTokenExpired } from "@/utils/checkToken";
import { redirect } from "next/navigation";
import LoadingScreen from "@/components/LoadingScreen";
import assets from "@/assets";
import WarningIcon from "@/assets/icons/error.svg";
import Link from "next/link";
import { logout } from "@/redux/auth/authSlice";

const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString();
};

const AdminDashboardContactsData = () => {
  const tableRef = useRef(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenDeleteModal,
    onOpen: onOpenDeleteModal,
    onOpenChange: onOpenChangeDeleteModal,
  } = useDisclosure();

  const [deletingRowId, setDeletingRowId] = useState<any>("");
  const { token: tokenState } = useAppSelector(authSelector);
  const { isLoading, data } = useAppSelector(contactsSelector);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    created_at: "",
  });
  const dispatch = useAppDispatch();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  React.useLayoutEffect(() => {
    if ((token && isTokenExpired()) || !token) {
      redirect("/admin/login");
    }
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getContactMessages(tokenState));
      } catch {
        toast.error("something went wrong, please refresh your page");
      }
    };
    fetchData();
  }, [tokenState, dispatch]);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await deleteMessage({ id: deletingRowId });
      dispatch(deleteContactMessage(deletingRowId));
      toast.success("Message deleted successfully");
      setDeletingRowId("");
      setIsDeleting(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setDeletingRowId("");
      setIsDeleting(false);
      toast.error("something went wrong, please try again");
    }
  };

  const viewOptions = [
    {
      key: "10",
      label: "10 Rows",
    },
    {
      key: "20",
      label: "20 Rows",
    },
    {
      key: "50",
      label: "50 Rows",
    },
    {
      key: "100",
      label: "100 Rows",
    },
  ];

  const sortOptions = [
    {
      key: "latest",
      label: "Latest",
    },
    {
      key: "oldest",
      label: "Oldest",
    },
  ];

  const viewOptionsDefault = viewOptions[0].key;

  const [viewValue, setViewValue] = useState(viewOptionsDefault);

  const sortOptionDefault = sortOptions[0].key;

  const [sortValue, setSortValue] = useState(sortOptionDefault);

  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = parseInt(viewValue);

  const pages = Math.ceil(data?.length / rowsPerPage);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(data?.slice(start, end));
    return data?.slice(start, end);
  }, [page, data, rowsPerPage]);

  const getSortedData = (data: any) => {
    if (sortValue === "oldest") {
      const sortedData = [...data].sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
      return sortedData;
    } else if (sortValue === "latest") {
      const sortedData = [...data].sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      return sortedData;
    }
  };

  const handleLogOut = () => {
    dispatch(logout());

    redirect("/admin/login");
  };

  if (isLoading) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <LoadingScreen />
      </div>
    );
  }

  return (
    <section className="p-4">
      <div className="flex flex-row gap-4 w-full items-end justify-end mr-8">
        <Link href="/" className=" ">
          <Button> Back To Home</Button>
        </Link>
        <Button onClick={handleLogOut} className="bg-red-400">
          Log Out
        </Button>
      </div>
      <main className="rounded-[20px] bg-white py-6 px-5 mt-6 ">
        <div className="flex items-center justify-between">
          <p className="font-bold text-[16px] text-mainBlack">Contacts data</p>
          <div className="flex justify-center items-center gap-5">
            <HeaderDropDown
              options={viewOptions}
              defaultSelectedKey={viewOptionsDefault}
              value={viewValue}
              setNewValue={setViewValue}
              styles="w-[139px] "
              mainStyles="bg-transparent border border-grayBorder rounded-[5px]"
            />
            <HeaderDropDown
              options={sortOptions}
              defaultSelectedKey={sortOptionDefault}
              value={sortValue}
              setNewValue={setSortValue}
              styles="w-[139px] "
              mainStyles="bg-transparent border border-grayBorder rounded-[5px]"
            />
            <DownloadTableExcel
              filename="users table"
              sheet="users"
              currentTableRef={tableRef.current}
            >
              <button className="flex items-center justify-center gap-1 text-nowrap bg-blueGr text-white font-medium text-base py-2  px-8 rounded-md">
                <p> Export excel</p>
                <Image src={assets.exportExcel} alt="export excel" />
              </button>
            </DownloadTableExcel>
          </div>
        </div>

        <article className="mt-5">
          {(items?.length > 0 && (
            <Table
              aria-label="Data Table"
              shadow="none"
              ref={tableRef}
              classNames={{
                th: [
                  "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px]  text-center",
                ],
                td: ["px-6  text-center font-normal text-base text-[#363941] "],
              }}
              bottomContent={
                <div className="flex w-full justify-center  mt-8">
                  <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="secondary"
                    page={page}
                    total={pages}
                    onChange={(page) => setPage(page)}
                  />
                </div>
              }
            >
              <TableHeader>
                <TableColumn>No</TableColumn>
                <TableColumn>Date</TableColumn>
                <TableColumn>First name</TableColumn>
                <TableColumn>Last name</TableColumn>
                <TableColumn>Email</TableColumn>
                <TableColumn>Phone</TableColumn>
                <TableColumn>Company name</TableColumn>
                <TableColumn>Message</TableColumn>
                <TableColumn>Actions</TableColumn>
              </TableHeader>
              <TableBody>
                {(getSortedData(items) || []).map((row: any, index: number) => (
                  <TableRow key={row.id} className="border-b-1">
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{formatDate(row.created_at)}</TableCell>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>{row.company}</TableCell>
                    <TableCell className="max-w-[300px] text-nowrap overflow-hidden text-ellipsis">
                      {row.message}
                    </TableCell>
                    <TableCell className="text-primaryBlue   cursor-pointer">
                      <div className="flex gap-2">
                        <Button
                          className="bg-blue-600 text-white "
                          onClick={() => {
                            setSelectedItem(row);
                            onOpen();
                          }}
                        >
                          Detail
                        </Button>
                        <Button
                          disabled={isDeleting}
                          className={`bg-red-500 text-white ${
                            deletingRowId === row.id ? "opacity-50" : ""
                          }`}
                          // onClick={() => handleDelete(row?.id)}
                          onClick={() => {
                            setDeletingRowId(row.id);
                            onOpenDeleteModal();
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )) || (
            <div className="flex justify-center items-center h-[200px]">
              <p className="text-[18px] font-semibold">No data available</p>
            </div>
          )}
        </article>
      </main>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="w-full"
        classNames={{
          base: "min-w-[80%]",
        }}
      >
        <ModalContent className="w-full">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Contact message details
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center gap-7">
                  <div>
                    <p className="font-semibold">Frist name</p>
                    <p>{selectedItem?.first_name}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Last name</p>
                    <p>{selectedItem?.last_name}</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <p>{selectedItem?.email}</p>
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>{selectedItem?.phone}</p>
                </div>
                <div>
                  <p className="font-semibold">Company</p>
                  <p>{selectedItem?.company}</p>
                </div>
                <div>
                  <p className="font-semibold">Message</p>
                  <p>{selectedItem?.message}</p>
                </div>
                <p>
                  <span className="font-semibold">Date:</span>{" "}
                  {formatDate(selectedItem?.created_at)}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isOpenDeleteModal}
        onOpenChange={onOpenChangeDeleteModal}
        classNames={{
          base: "max-w-[30%]",
        }}
      >
        <ModalContent className="w-full">
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center items-center">
                <Image
                  width={35}
                  height={35}
                  src={WarningIcon}
                  alt={"warning-icon"}
                />
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="font-semibold text-[18px]">
                    Are you sure you want to delete
                  </p>
                  <p className="ali">
                    This will permanently delete the message
                  </p>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-center items-center">
                <button
                  color="danger"
                  // variant="light"
                  className={`${
                    isDeleting ? "bg-slate-300" : "bg-red-400"
                  } py-2 px-4 rounded-md text-white`}
                  onClick={async () => {
                    await handleDelete();
                    onClose();
                  }}
                  disabled={isDeleting}
                >
                  {isDeleting ? "Deleting..." : "Delete"}
                </button>
                <button
                  className="bg-blue-200 py-2 px-4 rounded-md text-white"
                  onClick={() => {
                    onClose();
                    setDeletingRowId("");
                  }}
                >
                  Close
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default AdminDashboardContactsData;
