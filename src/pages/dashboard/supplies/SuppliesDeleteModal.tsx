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
        <Button className="bg-red-500 hover:bg-red-300">
          <Trash2 className="size-5 text-white" />
        </Button>
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
