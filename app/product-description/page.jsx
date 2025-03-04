"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Skeleton } from '@/components/ui/skeleton';


const Page = () => {
    // Form state
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [features, setFeatures] = useState('');
    const [targetAudience, setTargetAudience] = useState('');
    // Output and loading state
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const generateDescription = async () => {
        setIsLoading(true);
        setDescription(''); // Clear previous output

        // Prewritten prompt
        const prompt = `
      Write a compelling more than 300-word product description for an eCommerce store. 
      The product is "${productName}", in the category "${category}", 
      with features: "${features}", aimed at "${targetAudience}". 
      Make it persuasive, SEO-friendly, and highlight benefits in a creative way. Make it emotionally driven. Sell the experiences and emotions instead of the product. 
    `;

        try {
            const response = await axios.post('/api/generate', { prompt });
            setDescription(response.data.description);
        } catch (error) {
            setDescription('Error generating description. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="w-full h-screen z-50 relative bg-[#020617] text-white overflow-y-auto overflow-x-hidden font-[Geist] flex items-center justify-center">






                <div className=" h-full w-full absolute -z-50"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>





                <div className={`${isLoading || description !== "" ? "hidden" : "flex"} flex flex-col justify-center items-center`}>
                    <h1 className='md:text-7xl text-5xl  font-bold'>AINU</h1>
                    <h1 className='md:text-2xl text-xl text-center mb-4 w-[80%]'>Create Words That Make Customers Fall in Love</h1>
                </div>

                <div className={` ${isLoading || description ? "block" : "hidden"} md:w-[60%]  w-[95%] py-3 md:px-5 px-3 rounded-md overflow-y-auto backdrop-blur-md h-[80%] md:h-[80%] mb-14 bg-[#2e2e2e57]`}>
                    <h1 className='text-center text-gray-400 text-xl md:text-3xl font-semibold my-3'>Your Product Description</h1>


                    <div className={`${isLoading && !description ? "block" : "hidden"} w-full h-auto min-h-6 `}>
                        <Skeleton className="h-2 mt-6 bg-[#dadada] w-[80%]" />
                        <Skeleton className="h-2 mt-8 bg-[#dadada] w-full" />
                        <Skeleton className="h-2 mt-3 bg-[#dadada] w-[50%]" />
                        <Skeleton className="h-2 mt-3 bg-[#dadada] w-[90%]" />
                        <Skeleton className="h-2 mt-3 bg-[#dadada] w-full" />
                        <Skeleton className="h-2 mt-3 bg-[#dadada] w-[40%]" />
                        <Skeleton className="h-2 mt-3 bg-[#dadada] w-[70%]" />
                        <Skeleton className="h-2 mt-3 bg-[#dadada] w-[80%]" />
                        <Skeleton className="h-2 mt-3 bg-[#dadada] w-[95%]" />
                        <Skeleton className="h-2 mt-3 bg-[#dadada] w-[75%]" />
                        <Skeleton className="h-2 mt-3 bg-[#dadada] w-[85%]" />
                        <Skeleton className="h-2 mt-3 bg-[#dadada] w-[95%]" />
                        <Skeleton className="h-2 mt-3 bg-[#dadada] w-[75%]" />
                        <Skeleton className="h-2 mt-10 bg-[#dadada] w-[40%]" />
                    </div>


                    <ReactMarkdown>{description}</ReactMarkdown>
                </div>

                <div className="absolute flex items-center justify-center w-full bottom-5">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                disabled={isLoading}
                                variant="secondary"
                                className=" p-5  text-lg cursor-pointer"
                            >
                                {isLoading ? (!description ? "Generating..." : "Generate Another") : (description ? "Generate Another " : "Build Your Perfect Description")}
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Enter the Product Details</DialogTitle>
                                <DialogDescription>
                                    Enter your product details and click Generate.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="pname" className="text-right">
                                        Name
                                    </Label>
                                    <Input id="pname" placeholder="Product Name (e.g., Red Leather Jacket)"
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)} className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="category" className="text-right">
                                        Category
                                    </Label>
                                    <Input id="category" placeholder="Category (e.g., Apparel)"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)} className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="features" className="text-right">
                                        Features
                                    </Label>
                                    <Input id="features" placeholder="Features (e.g., waterproof, stylish, durable)"
                                        value={features}
                                        onChange={(e) => setFeatures(e.target.value)} className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="audience" className="text-left">
                                        Target Audience
                                    </Label>
                                    <Input id="audience" placeholder="Target Audience (e.g., young adults)"
                                        value={targetAudience}
                                        onChange={(e) => setTargetAudience(e.target.value)} className="col-span-3" />
                                </div>
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button onClick={generateDescription}
                                        disabled={isLoading || !productName || !category}
                                        className="w-full cursor-pointer">{isLoading ? 'Generating...' : 'Generate'}</Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>


            </div>
        </>
    )
}

export default Page