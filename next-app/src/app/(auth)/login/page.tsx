import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

export default function LoginPage() {
  return (
    <div>
      <Card>
        <CardHeader>
            <CardTitle>Login Form</CardTitle>
        </CardHeader>
        <CardContent>
            Loin in with Google account
        </CardContent>
      </Card>
    </div>
  )
}
