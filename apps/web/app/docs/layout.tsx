import { DocsSidebar } from "@/components/app/docs/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row">
        <DocsSidebar />
        <div className="flex flex-1 min-w-0">
          <main className="flex-1 max-w-2xl py-4">
            <div className="prose max-w-none">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
