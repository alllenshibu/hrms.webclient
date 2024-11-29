import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";
import DashboardLayout from "@/layouts/DashboardLayout";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </Theme>
      </body>
    </html>
  );
}
