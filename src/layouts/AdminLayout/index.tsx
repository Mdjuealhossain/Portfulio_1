"use client";
import AdminSidebar from "src/widgets/AdminSidebar";
import AdminAppBar from "src/widgets/AdminAppBar";
import { Box, Stack } from "@mui/material";

const AdminLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale?: string;
  };
}) => {
  return (
    <>
      <AdminSidebar />
      <Stack
        sx={(theme) => ({
          width: `calc(100% - ${theme.spacing(32.5)})`,
          marginLeft: theme.spacing(32.5),
        })}
      >
        <AdminAppBar params={params} />
        <Box mt={8}>{children}</Box>
      </Stack>
    </>
  );
};

export default AdminLayout;
