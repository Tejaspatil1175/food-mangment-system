"use client"

import { useState } from 'react'
import { Upload, BarChart2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function ImageWidgetAnalytics() {
  const [image, setImage] = useState<string | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [results, setResults] = useState<null | {
    cropHealth: number
    pestRisk: number
    waterStatus: number
  }>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImage(e.target?.result as string)
        setAnalyzing(true)
        // Simulate analysis delay
        setTimeout(() => {
          setAnalyzing(false)
          setResults({
            cropHealth: Math.random() * 100,
            pestRisk: Math.random() * 100,
            waterStatus: Math.random() * 100,
          })
        }, 2000)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Crop Image Analysis</CardTitle>
        <CardDescription>Upload an image of your crop for instant analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
            </label>
          </div>
          {image && (
            <div className="mt-4">
              <img src={image} alt="Uploaded crop" className="w-full h-auto rounded-lg" />
            </div>
          )}
          {analyzing && (
            <div className="text-center">
              <Progress value={66} className="w-full mt-2" />
              <p className="mt-2 text-sm text-gray-500">Analyzing image...</p>
            </div>
          )}
          {results && (
            <div className="space-y-4 mt-4">
              <h3 className="text-lg font-semibold">Analysis Results:</h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Crop Health</span>
                    <span className="text-sm font-medium">{results.cropHealth.toFixed(1)}%</span>
                  </div>
                  <Progress value={results.cropHealth} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Pest Risk</span>
                    <span className="text-sm font-medium">{results.pestRisk.toFixed(1)}%</span>
                  </div>
                  <Progress value={results.pestRisk} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Water Status</span>
                    <span className="text-sm font-medium">{results.waterStatus.toFixed(1)}%</span>
                  </div>
                  <Progress value={results.waterStatus} className="w-full" />
                </div>
              </div>
              <Button className="w-full mt-4">
                <BarChart2 className="w-4 h-4 mr-2" />
                View Detailed Report
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

