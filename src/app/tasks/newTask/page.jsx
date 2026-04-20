import { addNewTask1 } from "@/lib/actions";
import { CirclePlus } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";

const NewTask = () => {
  return (
    <div className="max-w-2xl w-full mx-auto">
      <form action={addNewTask1} className="flex flex-col gap-4">
        {/* this is form's title */}
        <TextField className="w-full" name="title" type="text">
          <Label>Title</Label>
          <Input placeholder="Enter your Task Title" />
        </TextField>
        {/* this is task's description */}
        <TextField className="w-full" name="description" type="text">
          <Label>Description</Label>
          <Input placeholder="Enter Your descriptions" />
        </TextField>
        {/* this is form's Status  */}
        <Select
          name="status"
          className="max-w-full w-full mx-auto"
          placeholder="Select a Status"
        >
          <Label>Status</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="inProgress" textValue="InProgress">
                In-progress
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="pending" textValue="Pending">
                Pending
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="low" textValue="Low">
                Completed
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        {/* this is form's Priority */}
        <Select
          name="priority"
          className="max-w-full w-full mx-auto"
          placeholder="Priority level"
        >
          <Label>Priority</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="high" textValue="High">
                High
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="medium" textValue="Medium">
                Medium
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="low" textValue="Low">
                Low
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        {/* this is form's assignedTo */}
        <TextField className="w-full" name="AssignedTo">
          <Label>Assigned To</Label>
          <Input placeholder="Task Assigned To" />
        </TextField>
        <div className="flex flex-row justify-end gap-3">
          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button slot="close" type="submit">
            Submit a Task
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewTask;
