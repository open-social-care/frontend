import Layout from "@/components/layout";
import Sidebar from "@/components/layout/SideBar";
import type { Metadata } from "next";
import {
  AiOutlineFileExcel,
  AiOutlineFileImage,
  AiOutlineHome,
} from "react-icons/ai";
import {
  BsFillPersonFill,
  BsHouseHeartFill,
  BsPersonVcard,
} from "react-icons/bs";

export const metadata: Metadata = {
  title: "Assistente Social",
};

const links = (
  <>
    <Sidebar.LinkGroup
      title="Assistente Social"
      icon={<BsFillPersonFill />}
    >
      <Sidebar.Link
        href="/home/social-assistant"
        icon={<AiOutlineHome />}
      >
        Inínio
      </Sidebar.Link>

      <Sidebar.Link
        href="/home/social-assistant/subjects"
        icon={<BsPersonVcard />}
      >
        Sujeitos
      </Sidebar.Link>
    </Sidebar.LinkGroup>

    <Sidebar.LinkGroup
      title="Conselho"
      icon={<BsHouseHeartFill />}
    >
      <Sidebar.Link
        href="/home/social-assistant/documents-example"
        icon={<AiOutlineFileExcel />}
      >
        Documentos
      </Sidebar.Link>

      <Sidebar.Link
        href="/home/social-assistant/images-example"
        icon={<AiOutlineFileImage />}
      >
        Imagens
      </Sidebar.Link>
    </Sidebar.LinkGroup>
  </>
);

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar.Root>{links}</Sidebar.Root>

      <Layout.Main>{children}</Layout.Main>
    </>
  );
}
