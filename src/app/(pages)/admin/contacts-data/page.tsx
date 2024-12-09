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

const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString();
};

const AdminDashboardContactsData = () => {
  const tableRef = useRef(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [deletingRowId, setDeletingRowId] = useState<any>("");
  const { token } = useAppSelector(authSelector);
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

  React.useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token && isTokenExpired()) {
      redirect("/admin/login");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getContactMessages(token));
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error("something went wrong, please refresh your page");
      }
    };
    fetchData();
  }, [token, dispatch]);

  const handleDelete = async (id: number | string) => {
    try {
      setDeletingRowId(id);
      setIsDeleting(true);
      await deleteMessage({ id: id });
      dispatch(deleteContactMessage(id));
      setIsDeleting(false);
      toast.success("Message deleted successfully");
      setDeletingRowId("");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setIsDeleting(false);
      setDeletingRowId("");
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
  }, [page, data, viewValue, rowsPerPage]);

  if (isLoading) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <LoadingScreen />
      </div>
    );
  }

  return (
    <section>
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
              {items?.map((row: any) => (
                <TableRow key={row.id} className="border-b-1">
                  <TableCell>{row.id + 1}</TableCell>
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
                        onClick={() => handleDelete(row?.id)}
                      >
                        {deletingRowId === row.id ? "Deleting..." : "Delete"}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
    </section>
  );
};

export default AdminDashboardContactsData;
