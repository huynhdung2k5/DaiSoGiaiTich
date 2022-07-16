import GeoGebra from "src/sections/geogebra/Geogebra";
// @Mui
import { Container } from "@mui/material";
// Hooks
import useSettings from "src/hooks/useSettings";
// Routes
import { PATH_DASHBOARD } from "src/routes/paths";
// Components
import Page from "src/components/Page";
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
// Files
import doThiHamSo from "src/assets/GGBs/dai-so-va-giai-tich/do_thi_ham_so.ggb";

export default function DoThiHamSo() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Đồ thị hàm số">
      <Container maxWidth={themeStretch ? false : "lg"}>
        <HeaderBreadcrumbs
          heading="Đồ thị hàm số"
          links={[
            {
              name: "Đại số và Giải tích",
              href: PATH_DASHBOARD.daiSoVaGiaiTich.root,
            },
            { name: "Đồ thị hàm số" },
          ]}
        />
        <GeoGebra filename={doThiHamSo} />
      </Container>
    </Page>
  );
}
