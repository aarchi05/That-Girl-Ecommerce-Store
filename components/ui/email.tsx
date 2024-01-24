import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function EmailInput() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-3">
      <Input type="email" placeholder="Email" />
      <Button type="submit" className="flex items-center">
        
        <span className="mr-2"> Submit</span>
        <Mail className="h-4 w-4" />
        
      </Button>
    </div>
  );
}
