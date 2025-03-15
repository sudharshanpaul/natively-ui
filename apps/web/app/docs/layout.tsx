import { DocsSidebar } from "@/components/app/docs/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <DocsSidebar />
      <div className="flex-1 overflow-y-auto">
        <main className="py-4 px-6">
          <div className="prose max-w-none">{children}</div>
        </main>
      </div>
    </div>
  );
}
