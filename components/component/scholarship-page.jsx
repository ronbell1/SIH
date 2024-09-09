import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Scholarship() {
  return (
    (<div className="container mx-auto max-w-3xl py-12 px-4 md:px-0">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Scholarship Application</h1>
        <p className="text-muted-foreground">
          Apply for our prestigious scholarship program and take the next step towards your educational goals.
        </p>
      </div>
      <form className="mt-8 space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reason">Reason for Applying</Label>
          <Textarea
            id="reason"
            placeholder="Explain why you deserve this scholarship"
            required />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="tenth">10th Percentage</Label>
            <Input
              id="tenth"
              type="number"
              placeholder="Enter your 10th percentage"
              required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="twelfth">12th Percentage</Label>
            <Input
              id="twelfth"
              type="number"
              placeholder="Enter your 12th percentage"
              required />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Upload Documents</Label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="aadhar">Aadhar Card</Label>
              <Input id="aadhar" type="file" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tenth-certificate">10th Certificate</Label>
              <Input id="tenth-certificate" type="file" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="twelfth-certificate">12th Certificate</Label>
              <Input id="twelfth-certificate" type="file" required />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Submit Application</Button>
        </div>
      </form>
    </div>)
  );
}
