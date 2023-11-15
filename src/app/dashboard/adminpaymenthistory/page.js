"use client";
import Image from "next/image";
import { Avatar, Badge, Button, Popover, Table } from "keep-react";

import { useEffect, useState } from 'react';

const AdminPayment = () => {
	const [isPayment, setIsPayment] = useState([]);
	useEffect(() => {
		fetch('/api/payment')
			.then((res) => res.json())
			.then((data) => {
				setIsPayment(data.result);
			});
	}, []);
	console.log(isPayment);

	return (

<>   <Table >
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-2xl font-semibold text-slate-600">
                Paid member
              </p>
              <Badge size="xs" colorType="light" color="gray">
                {isPayment.length} Member
              </Badge>
            </div>
         
          </div>
        </Table.Caption>
        <Table.Head className="bg-[#007bff] ">
          <Table.HeadCell >
            <p className="text-xs font-medium text-white">#</p>
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[290px]">
            <p className="text-xs font-medium text-white">Patient</p>
          </Table.HeadCell>
          <Table.HeadCell className="text-white">Status</Table.HeadCell>
          <Table.HeadCell className="min-w-[240px] text-white">
           Doctor Name 
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[215px] text-white">Payment ID</Table.HeadCell>
          <Table.HeadCell className="min-w-[215px] text-white">Date & Time</Table.HeadCell>
          <Table.HeadCell className="min-w-[200px] text-white">Action</Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]" />
        </Table.Head>
		<Table.Body className="divide-y divide-gray-25">
		{isPayment?.map((payment, index) =>(
          <Table.Row className="bg-white" >
            <Table.Cell key={index}>
            
            {index+1}
            
            </Table.Cell>
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
            <Table.Cell>
              <Badge colorType="light" color="success" dot={true}>
			  {payment.status}
              </Badge>
            </Table.Cell>
          
            <Table.Cell>{payment.doctor}</Table.Cell>
            <Table.Cell>
			{payment.payment_id}
            </Table.Cell>
            <Table.Cell>
			{payment.date} 
            </Table.Cell>
            <Table.Cell>
             <button className="bg-red-600 btn btn-sm text-white">Delete</button>
            </Table.Cell>
			</Table.Row>))}
        </Table.Body>
      </Table>

	

</>

		
	);
};

export default AdminPayment;
