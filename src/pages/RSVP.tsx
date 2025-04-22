
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your full name' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  attending: z.enum(['yes', 'no']),
  guests: z.number().min(0).max(5),
  dietaryRestrictions: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const RSVP = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      attending: 'yes',
      guests: 0,
      dietaryRestrictions: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Your RSVP has been submitted!');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center bg-[#fdf8f5]">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="font-serif text-2xl text-gray-800">Thank You!</CardTitle>
            <CardDescription>Your RSVP has been submitted successfully.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">
              We're excited to celebrate our special day with you! You'll receive a confirmation email shortly.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="bg-rose-600 hover:bg-rose-700 text-white">
              Submit Another Response
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[#fdf8f5]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">RSVP</h1>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Please let us know if you'll be joining us on our special day by September 1, 2024.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-gray-800">Your Response</CardTitle>
            <CardDescription>Fill out the form below to RSVP to our wedding.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="attending"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Will you be attending?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="attending-yes" />
                            <Label htmlFor="attending-yes">Yes, I'll be there!</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="attending-no" />
                            <Label htmlFor="attending-no">Sorry, I can't make it</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {form.watch('attending') === 'yes' && (
                  <>
                    <FormField
                      control={form.control}
                      name="guests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Additional Guests</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min="0" 
                              max="5" 
                              {...field} 
                              onChange={e => field.onChange(parseInt(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormDescription>
                            Not including yourself. Maximum 5 additional guests.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dietaryRestrictions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dietary Restrictions</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please let us know if you have any dietary restrictions or allergies."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message for the Couple (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Share your well wishes or a special message for us."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RSVP;