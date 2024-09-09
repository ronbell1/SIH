import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ProfilePage() {
  return (
    (<Card className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <CardHeader className="flex items-center justify-between">
        <div>
          <CardTitle className="text-3xl font-bold">User Profile</CardTitle>
          <CardDescription>Update your personal information.</CardDescription>
        </div>
        <Avatar className="h-12 w-12 rounded-full">
          <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid gap-4">
          <adiv className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value="Raju Shah" disabled />
          </adiv>
          <div className="grid gap-2">
            <Label htmlFor="applicant-number">Applicant Number</Label>
            <Input id="applicant-number" value="123456" disabled />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" defaultValue="+91 1234567890" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="raju@example.com" />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="address-line1">Address Line 1</Label>
            <Input id="address-line1" defaultValue="123 Main St" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address-line2">Address Line 2</Label>
            <Input id="address-line2" defaultValue="Apt 456" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" defaultValue="Mumbai" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="state">State</Label>
              <Input id="state" defaultValue="Maharashtra" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="zip">Zip Code</Label>
              <Input id="zip" defaultValue="400001" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="country">Country</Label>
              <Input id="country" defaultValue="India" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </CardFooter>
    </Card>)
  );
}
