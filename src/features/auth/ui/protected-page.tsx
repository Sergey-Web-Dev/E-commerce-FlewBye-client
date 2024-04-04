import { useSessionQuery } from "@/entities/session";
import PageSpinner from "@/widgets/page-spinner";
import { PropsWithChildren, ReactElement } from "react";
import SignIn from "../../../../pages/sign-in";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/constants/routes";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const { isError, isLoading } = useSessionQuery();
    const router = useRouter();

    if (isLoading) return <PageSpinner />;
    if (isError) router.push(ROUTES.SIGNIN);

    return <Component {...props} />;
  };
}
