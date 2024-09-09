import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export function LandingPage() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="bg-background border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <GraduationCapIcon className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">Scholarship Portal</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/apply" className="text-sm font-medium hover:underline" prefetch={false}>
              Scholarships
            </Link>
            <Link href="/institution" className="text-sm font-medium hover:underline" prefetch={false}>
              Institutions
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}>
              Login
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}>
              Sign Up
            </Link>
          </nav>
          <button
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:hidden">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/90 py-12 md:py-24">
          <div
            className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1
                className="text-3xl font-bold tracking-tighter text-primary-foreground md:text-4xl/tight">
                Unlock Your Potential with Our Scholarships
              </h1>
              <p
                className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore a wide range of scholarships tailored to your academic and financial needs. Take the first step
                towards your educational goals.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-8 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary-foreground/90 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2"
                prefetch={false}>
                Apply Now
              </Link>
            </div>
            <img
              src="/scholar.jpg "
              width="550"
              height="310"
              alt="Scholarship"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" />
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-6 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Available Scholarships</h2>
            </div>
            <div className="grid w-full max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-3">
              <Card className="space-y-2">
                <CardHeader>
                  <CardTitle>Academic Excellence Scholarship</CardTitle>
                  <CardDescription>Awarded to students with outstanding academic achievements.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Eligibility: Minimum GPA of 3.8, demonstrated leadership experience.
                  </p>
                  <p className="text-muted-foreground">Award Amount: ₹50,000</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}>
                    Apply Now
                  </Link>
                </CardFooter>
              </Card>
              <Card className="space-y-2">
                <CardHeader>
                  <CardTitle>Diversity Scholarship</CardTitle>
                  <CardDescription>Promoting diversity and inclusion in higher education.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Eligibility: Underrepresented minority students, strong community involvement.
                  </p>
                  <p className="text-muted-foreground">Award Amount: ₹75,000</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}>
                    Apply Now
                  </Link>
                </CardFooter>
              </Card>
              <Card className="space-y-2">
                <CardHeader>
                  <CardTitle>STEM Scholarship</CardTitle>
                  <CardDescription>
                    Supporting students pursuing degrees in science, technology, engineering, and mathematics.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Eligibility: Declared STEM major, demonstrated passion for innovation.
                  </p>
                  <p className="text-muted-foreground">Award Amount: ₹1,00,000</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}>
                    Apply Now
                  </Link>
                </CardFooter>
              </Card>
              <Card className="space-y-2">
                <CardHeader>
                  <CardTitle>Financial Need Scholarship</CardTitle>
                  <CardDescription>Providing financial assistance to students with demonstrated need.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Eligibility: Household income below a certain threshold, strong academic performance.
                  </p>
                  <p className="text-muted-foreground">Award Amount: ₹1,50,000</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}>
                    Apply Now
                  </Link>
                </CardFooter>
              </Card>
              <Card className="space-y-2">
                <CardHeader>
                  <CardTitle>International Student Scholarship</CardTitle>
                  <CardDescription>Assisting international students with their educational expenses.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Eligibility: International student status, strong academic record.
                  </p>
                  <p className="text-muted-foreground">Award Amount: ₹1,25,000</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}>
                    Apply Now
                  </Link>
                </CardFooter>
              </Card>
              <Card className="space-y-2">
                <CardHeader>
                  <CardTitle>Community Service Scholarship</CardTitle>
                  <CardDescription>
                    Recognizing students who have made a significant impact through community service.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Eligibility: Demonstrated commitment to community service, leadership experience.
                  </p>
                  <p className="text-muted-foreground">Award Amount: ₹80,000</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}>
                    Apply Now
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-6 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Application Process</h2>
            </div>
            <div className="grid w-full max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-3">
              <Card className="space-y-2">
                <CardHeader>
                  <CardTitle>Step 1: Explore</CardTitle>
                  <CardDescription>
                    Browse through our available scholarships and find the one that best fits your profile.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Carefully review the eligibility criteria and application requirements for each scholarship.
                  </p>
                </CardContent>
              </Card>
              <Card className="space-y-2">
                <CardHeader>
                  <CardTitle>Step 2: Prepare</CardTitle>
                  <CardDescription>
                    Gather all the necessary documents and information required for the application.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This may include transcripts, letters of recommendation, essays, and any other supporting materials.
                  </p>
                </CardContent>
              </Card>
              <Card className="space-y-2">
                <CardHeader>
                  <CardTitle>Step 3: Apply</CardTitle>
                  <CardDescription>Submit your completed application before the deadline.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Make sure to double-check your application for any errors or missing information.
                  </p>
                </CardContent>
              </Card>
              <Card className="space-y-2">
                <CardHeader>
                  <CardTitle>Step 4: Wait</CardTitle>
                  <CardDescription>Be patient as we review your application and make a decision.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We will notify you of the outcome as soon as the review process is complete.
                  </p>
                </CardContent>
              </Card>
              <Card className="space-y-2">
                <CardHeader>
                  <CardTitle>Step 5: Celebrate</CardTitle>
                  <CardDescription>
                    If selected, congratulations! You have taken a significant step towards your educational goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We are excited to support you on your journey and wish you the best of luck.
                  </p>
                </CardContent>
              </Card>
              <Card className="space-y-2">
                <CardHeader>
                  <CardTitle>Step 6: Reapply</CardTitle>
                  <CardDescription>
                    If you are not selected, don't be discouraged. You can reapply for future scholarship opportunities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We encourage you to continue pursuing your educational goals and to explore other funding options.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>)
  );
}

function GraduationCapIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}