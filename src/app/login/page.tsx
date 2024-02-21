import { Box, Card, Center, Flex, Image } from "@mantine/core";
import FormLogin from "./_form-login";

import styles from "./styles.module.css";
import i18n from "@/lang";

export const metadata = {
  title: i18n.t("auth.login"),
};

export default async function Page() {
  return (
    <div className={styles.backgroud}>
      <Flex w="100%" h="100vmin" align="center" justify="center">
        <Box maw={300} mx="auto">
          <Center>
            <Image
              maw={63}
              src="/images/logo-black.png"
              alt="logo"
              w="63"
              mr="lg"
            />
          </Center>

          <Card mt="md" shadow="sm" padding="lg" radius="md" withBorder>
            <FormLogin />
          </Card>
        </Box>
      </Flex>
    </div>
  );
}
