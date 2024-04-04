import { useSessionQuery } from "@/entities/session";
import PageSpinner from "@/widgets/page-spinner";
import { PropsWithChildren, ReactElement } from "react";
import SignIn from "../../../../pages/sign-in";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/constants/routes";

export function protectedAdminPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const { isError, isLoading } = useSessionQuery();
    const adminSession = useSessionQuery();
    const router = useRouter();

    if (isLoading) return <PageSpinner />;
    if (!(adminSession.data?.email === "kate@mail.ru"))
      router.push(ROUTES.ACCOUNT);

    return <Component {...props} />;
  };
}
