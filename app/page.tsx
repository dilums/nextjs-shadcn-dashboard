import Error from "@/components/layout/Error";
import Loading from "@/components/layout/Loading";
import SuccessWrapper from "@/components/layout/SuccessWrapper";

export default function Home() {
  return (
    <main className="pb-20">
      <Error />
      <Loading />
      <SuccessWrapper>data</SuccessWrapper>
    </main>
  );
}
