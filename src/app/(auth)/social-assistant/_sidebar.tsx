import { DashboardLayout } from "@/components/layouts";

import { AiOutlineFileExcel, AiOutlineFileImage, AiOutlineHome } from "react-icons/ai";
import { BsFillPersonFill, BsHouseHeartFill, BsPersonVcard } from "react-icons/bs";

export default function SocialAssistantSideBar() {
  return (
    <DashboardLayout.SideBar.Root>
      <DashboardLayout.SideBar.LinkGroup
        title="Assistente Social"
        icon={<BsFillPersonFill />}
      >
        <DashboardLayout.SideBar.Link
          href="/social-assistant"
          icon={<AiOutlineHome />}
        >
          Início
        </DashboardLayout.SideBar.Link>

        <DashboardLayout.SideBar.Link
          href="/social-assistant/subjects"
          icon={<BsPersonVcard />}
        >
          Sujeitos
        </DashboardLayout.SideBar.Link>
      </DashboardLayout.SideBar.LinkGroup>

      <DashboardLayout.SideBar.LinkGroup
        title="Conselho"
        icon={<BsHouseHeartFill />}
      >
        <DashboardLayout.SideBar.Link
          href="/social-assistant/documents-example"
          icon={<AiOutlineFileExcel />}
        >
          Documentos
        </DashboardLayout.SideBar.Link>

        <DashboardLayout.SideBar.Link
          href="/social-assistant/images-example"
          icon={<AiOutlineFileImage />}
        >
          Imagens
        </DashboardLayout.SideBar.Link>
      </DashboardLayout.SideBar.LinkGroup>
    </DashboardLayout.SideBar.Root>
  );
}
