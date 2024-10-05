import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteSupplyMutation } from "@/redux/features/reliefGoods/supplyApi";
import { Trash2 } from "lucide-react";
import { TAddSupplyInputs } from "../create-supplies/AddSupplies";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const SuppliesDeleteModal = ({ item }: { item: TAddSupplyInputs }) => {
  const [deleteSupply] = useDeleteSupplyMutation();
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await deleteSupply(item._id);
      toast("Supply Post Deleted Successfully.");

      navigate("/dashboard/supplies");
    } catch (error) {
      toast("Please, try again.");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Trash2 className="size-6 text-red-500 hover:text-red-700 lg:mr-3 mb-2 cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this data? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button type="submit" onClick={handleDelete}>
            Delete <Trash2 className="size-5 ml-2" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SuppliesDeleteModal;
