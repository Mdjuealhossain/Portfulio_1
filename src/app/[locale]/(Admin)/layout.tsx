import AdminLayout from "src/layouts/AdminLayout";

const AdminPageLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale?: string;
  };
}) => {
  return <AdminLayout params={params}>{children}</AdminLayout>;
};

export default AdminPageLayout;
