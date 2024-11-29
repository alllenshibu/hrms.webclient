import { Flex, Link, Text } from "@radix-ui/themes";

export default function SideBar() {
    return (
        <Flex
            width="20%"
            direction="column"
            justify="start"
            align="start"
            gap="4"
        >
            <Flex>
                <Text size="8" weight="bold">HRMS</Text>
            </Flex>
            <Flex>
                <Link href="/management">Management</Link>
            </Flex>
        </Flex >
    );
}
