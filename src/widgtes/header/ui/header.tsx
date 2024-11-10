import { Navigation } from "@/features/navigation";
import { SearchPanel } from "@/features/search-panel";
import { UserButtons } from "@/features/user-buttons";

export const Header = () => {
  return (
    <header className="rounded-[40px] p-[20px] bg-white flex items-center justify-between mb-[40px]">
      <Navigation />
      <div className="flex gap-[26px]">
        <SearchPanel className="min-w-[380px]" />
        <UserButtons />
      </div>
    </header>
  );
};
