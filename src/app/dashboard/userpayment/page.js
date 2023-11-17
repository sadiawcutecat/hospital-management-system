"use client";
import useAuth from "@/Components/hooks/useAuth";

import { Avatar, Table } from "keep-react";
import { useEffect, useState } from "react";

const UserPayment = () => {
  const { user } = useAuth();
  console.log(user.email);
  const [isPayment, setIsPayment] = useState([]);
  useEffect(() => {
    fetch(`/api/payment`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsPayment(data.result);
      });
  }, [user.email]);

 

  const payments = isPayment.filter((p) => p.petainEmail === user.email);
  console.log(payments);

  return (
    <>
      {" "}
      <Table>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <h2 className="text-2xl">Payment History</h2>
          </div>
        </Table.Caption>
        <Table.Head className="bg-[#007bff] ">
          <Table.HeadCell>
            <p className="text-xs font-medium text-white">#</p>
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[290px]">
            <p className="text-xs font-medium text-white">Patient</p>
          </Table.HeadCell>

          <Table.HeadCell className="min-w-[150px] text-white">
            Doctor Name
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[215px] text-white">
            Payment ID
          </Table.HeadCell>
          <Table.HeadCell className=" text-white">Amount</Table.HeadCell>
          <Table.HeadCell className="min-w-[215px] text-white">
            Date & Time
          </Table.HeadCell>
         
          <Table.HeadCell className="min-w-[100px]" />
        </Table.Head>
        <Table.Body className="divide-y divide-gray-25 w-full">
          {payments?.map((payment, index) => (
            <Table.Row className="bg-white">
              <Table.Cell key={index}>{index + 1}</Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Avatar
                        shape="circle"
                        img={payment.petainPhoto}
                        size="md"
                      />
                      <div>
                        <p className="-mb-0.5 text-base font-medium text-slate-600">
                          {payment.petainName}
                        </p>
                        <span>{payment.petainEmail}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Table.Cell>

              <Table.Cell>{payment.doctor}</Table.Cell>
              <Table.Cell>{payment.payment_id}</Table.Cell>
              <Table.Cell>{payment.amount}</Table.Cell>
              <Table.Cell>{payment.date}</Table.Cell>
            
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default UserPayment;
