"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";
import { useSearchParams } from "next/navigation";

interface Query {
  search?: string;
  favourites?: string;
};

export default function DashboardPage() {
  const { organization } = useOrganization();
  const searchParams = useSearchParams()

  const favourites = searchParams.get("favourites") ?? undefined
  const search = searchParams.get("search") ?? undefined

  const query: Query= {
    search,
    favourites
  }

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={query} />
      )}
    </div>
  );
}