"use client";

import { DataTable } from "../ui/data-table";
import Heading from "../ui/heading";
import { Separator } from "../ui/separator";
import { OrderColumn, columns } from "./OrderColumn";

interface OrderClientProps {
  data: OrderColumn[];
}

const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Orders (${data.length})`}
          description="Manage your orders."
        />
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
    </>
  );
};

export default OrderClient;
