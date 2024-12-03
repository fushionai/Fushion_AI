"use client";

import React, { useState } from "react";

import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Checkbox,
} from "@nextui-org/react";

import dummyContacts from "@/data/dummyContacts";
import HeaderDropDown from "@/components/layouts/HeaderDropDown";
import { label } from "framer-motion/client";

const AdminDashboardContactsData = () => {
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

  const pages = Math.ceil(dummyContacts.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(dummyContacts.slice(start, end));
    return dummyContacts.slice(start, end);
  }, [page, dummyContacts, viewValue, rowsPerPage]);

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
          </div>
        </div>

        <article className="mt-5">
          <Table
            aria-label="Data Table"
            shadow="none"
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
              <TableColumn>Detail</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.id} className="border-b-1">
                  <TableCell>{row.id + 1}</TableCell>
                  <TableCell>02/12/2024</TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.companyName}</TableCell>
                  <TableCell className="max-w-[300px] text-nowrap overflow-hidden text-ellipsis">
                    {row.message}
                  </TableCell>
                  <TableCell className="text-primaryBlue underline cursor-pointer">
                    Detail
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </main>
    </section>
  );
};

export default AdminDashboardContactsData;
