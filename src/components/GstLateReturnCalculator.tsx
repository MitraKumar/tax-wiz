'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const initialData = {
  taxPeriodMonth: 5,
  taxPeriodYear: 2024,
  taxReturnData: new Date('30/06/2024'),
  taxLiabilityFC: {
    igst: 0,
    cgst: 0,
    sgst: 0,
    cess: 0,
    total: 0,
  },
  taxLiabilityRCM: {
    igst: 0,
    cgst: 0,
    sgst: 0,
    cess: 0,
    total: 0,
  },
  taxLiabilityTotal: {
    igst: 0,
    cgst: 0,
    sgst: 0,
    cess: 0,
    total: 0,
  },
  itcAvailable: {
    igst: 0,
    cgst: 0,
    sgst: 0,
    cess: 0,
    total: 0,
  },
  cashPaid: {
    igst: 0,
    cgst: 0,
    sgst: 0,
    cess: 0,
    total: 0,
  }
}

export function GstLateReturnCalculator() {

  const form = useForm<typeof initialData>({
    defaultValues: initialData
  })

  function onSubmit(values: any) {
    console.log(values)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex justify-between items-center">
          <h3 className="text-xl">Tax Liability FC</h3>
          <FormField
            control={form.control}
            name="itcAvailable.igst"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IGST</FormLabel>
                <FormControl>
                  <Input placeholder="IGST" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="itcAvailable.cgst"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CGST</FormLabel>
                <FormControl>
                  <Input placeholder="CGST" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="itcAvailable.sgst"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SGST</FormLabel>
                <FormControl>
                  <Input placeholder="SGST" type="number" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="itcAvailable.cess"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CESS</FormLabel>
                <FormControl>
                  <Input placeholder="CESS" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="itcAvailable.total"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total</FormLabel>
                <FormControl>
                  <Input placeholder="Total" type="number" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-xl">Tax Liability RCM</h3>
          <FormField
            control={form.control}
            name="itcAvailable.igst"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IGST</FormLabel>
                <FormControl>
                  <Input placeholder="IGST" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="itcAvailable.cgst"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CGST</FormLabel>
                <FormControl>
                  <Input placeholder="CGST" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="itcAvailable.sgst"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SGST</FormLabel>
                <FormControl>
                  <Input placeholder="SGST" type="number" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="itcAvailable.cess"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CESS</FormLabel>
                <FormControl>
                  <Input placeholder="CESS" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="itcAvailable.total"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total</FormLabel>
                <FormControl>
                  <Input placeholder="Total" type="number" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-xl">Tax Liability Total</h3>
          <FormField
            control={form.control}
            name="itcAvailable.igst"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IGST</FormLabel>
                <FormControl>
                  <Input placeholder="IGST" type="number" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="itcAvailable.cgst"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CGST</FormLabel>
                <FormControl>
                  <Input placeholder="CGST" type="number" {...field}disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="itcAvailable.sgst"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SGST</FormLabel>
                <FormControl>
                  <Input placeholder="SGST" type="number" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="itcAvailable.cess"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CESS</FormLabel>
                <FormControl>
                  <Input placeholder="CESS" type="number" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="itcAvailable.total"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total</FormLabel>
                <FormControl>
                  <Input placeholder="Total" type="number" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <h2 className="text-2xl">Let us know your available ITC</h2>
        <div className="flex justify-between items-center">
          <h3 className="text-xl">ITC Available</h3>
          <FormField
            control={form.control}
            name="itcAvailable.igst"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IGST</FormLabel>
                <FormControl>
                  <Input placeholder="IGST" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="itcAvailable.cgst"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CGST</FormLabel>
                <FormControl>
                  <Input placeholder="CGST" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="itcAvailable.sgst"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SGST</FormLabel>
                <FormControl>
                  <Input placeholder="SGST" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="itcAvailable.cess"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CESS</FormLabel>
                <FormControl>
                  <Input placeholder="CESS" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="itcAvailable.total"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total</FormLabel>
                <FormControl>
                  <Input placeholder="Total" type="number" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <h2 className="text-2xl">Total cash to be paid</h2>
        <div className="flex justify-between items-center">
          <h3 className="text-xl">Cash To be Paid</h3>
          <FormField
            control={form.control}
            name="cashPaid.igst"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IGST</FormLabel>
                <FormControl>
                  <Input placeholder="IGST" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cashPaid.cgst"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CGST</FormLabel>
                <FormControl>
                  <Input placeholder="CGST" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cashPaid.sgst"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SGST</FormLabel>
                <FormControl>
                  <Input placeholder="SGST" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cashPaid.cess"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CESS</FormLabel>
                <FormControl>
                  <Input placeholder="CESS" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cashPaid.total"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total</FormLabel>
                <FormControl>
                  <Input placeholder="Total" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

