import { protectedAdminPage } from "@/features/auth/ui/protected-admin-page";
import AdminPage from "@/pages/admin";

export default protectedAdminPage(AdminPage);
