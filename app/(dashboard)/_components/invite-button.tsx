import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";

export function InviteButton() {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Invite members
        </Button>
      </DialogTrigger>
      <DialogTitle>
        <DialogContent className="border-none p-0 bg-transparent min-w-[880]">
          <OrganizationProfile routing="hash"/>
        </DialogContent>
      </DialogTitle>
      
    </Dialog>
  );
}