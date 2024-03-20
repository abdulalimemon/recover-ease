import Container from "@/components/layout/Container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const DetailReliefBreadcrumb = ({ title }: { title: string }) => {
  return (
    <section className="lg:h-16 bg-slate-50 dark:bg-slate-900 py-3">
      <Container className="h-full">
        <Breadcrumb className="flex items-center justify-center h-full text-center">
          <BreadcrumbList className="flex items-center justify-center h-full text-center ">
            <BreadcrumbItem>
              <Link to="/" className="text-base font-medium">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link to="/all-relief-goods" className="text-base font-medium">
                All Relief Goods
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-base font-medium">
                {title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Container>
    </section>
  );
};

export default DetailReliefBreadcrumb;
