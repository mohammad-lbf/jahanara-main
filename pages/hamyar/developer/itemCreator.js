import Head from "next/head";
import FileForm from "@/components/modules/Hamyar modules/components/modules/FileForm";
import HamyarLayout from "@/components/layout/HamyarLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>صفحه فرم فایل | سامانه همیار معلم دبستان شهید جهان آرا</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <HamyarLayout>
      <main style={{ minHeight: "100vh" }}>
        <FileForm />
      </main>
    </HamyarLayout>
    </>
  );
}
