import { Box, Container, Flex } from "@radix-ui/themes";
import SideBar from "./SideBar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Container>
            <Flex
                width="100%"
                direction="row"
                justify="start"
                align="start"
            >
                <SideBar></SideBar>
                <Box width="100%">
                    {children}
                </Box>
            </Flex>
        </Container>
    );
}
