import DashboardLayout from "@/components/dashboardlayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto py-10 space-y-8">
        <h1 className="text-4xl font-bold mb-8 text-blue-300">Settings</h1>
        <Card className="bg-gray-800 text-white border-blue-500">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-300">Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-blue-300">Username</Label>
              <Input id="username" defaultValue="johndoe" className="bg-gray-700 text-white border-blue-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-blue-300">Email</Label>
              <Input id="email" type="email" defaultValue="john@example.com" className="bg-gray-700 text-white border-blue-500" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="notifications" />
              <Label htmlFor="notifications" className="text-blue-300">Enable email notifications</Label>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-105">
              Save Changes
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 text-white border-blue-500">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-300">API Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="api-key" className="text-blue-300">API Key</Label>
              <Input id="api-key" defaultValue="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" className="bg-gray-700 text-white border-blue-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="webhook-url" className="text-blue-300">Webhook URL</Label>
              <Input id="webhook-url" defaultValue="https://example.com/webhook" className="bg-gray-700 text-white border-blue-500" />
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-105">
              Regenerate API Key
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

