import Container from "@/components/layout/Container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const AllReliefBreadcrumb = () => {
  return (
    <section className="h-14 lg:h-16">
      <Container className="h-full">
        <Breadcrumb className="flex items-center justify-center h-full">
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/" className="text-base font-medium">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-base font-medium">All Relief Goods</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Container>
    </section>
  );
};

export default AllReliefBreadcrumb;
