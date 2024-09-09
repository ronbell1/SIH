import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Institution() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary py-4 px-6 md:px-8 lg:px-10">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <GraduationCapIcon className="h-6 w-6 text-primary-foreground" />
            <span className="text-lg font-semibold text-primary-foreground">Scholarship Hub</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="/apply"
              className="text-sm font-medium text-primary-foreground hover:underline underline-offset-4"
              prefetch={false}>
              Scholarships
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-primary-foreground hover:underline underline-offset-4"
              prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden">
            <MenuIcon className="h-6 w-6 text-primary-foreground" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg shadow-md p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-full p-2">
                    <BriefcaseIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Top Scholarship Providers</h3>
                </div>
                <p className="text-muted-foreground">
                  Explore the top scholarship providers offering a wide range of opportunities for students.
                </p>
                <div className="mt-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    View Providers
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-secondary rounded-full p-2">
                    <BookIcon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Scholarship Categories</h3>
                </div>
                <p className="text-muted-foreground">
                  Discover scholarships across various fields, from academic excellence to community service.
                </p>
                <div className="mt-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Explore Categories
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent rounded-full p-2">
                    <AwardIcon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Scholarship Application Tips</h3>
                </div>
                <p className="text-muted-foreground">
                  Get expert advice on crafting a winning scholarship application and increasing your chances of
                  success.
                </p>
                <div className="mt-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Explore More Scholarship Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg shadow-md p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-full p-2">
                    <GraduationCapIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">University of XYZ</h3>
                </div>
                <p className="text-muted-foreground">
                  The University of XYZ offers a wide range of scholarships for undergraduate and graduate students,
                  covering tuition, housing, and other expenses.
                </p>
                <div className="mt-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Explore Scholarships
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-secondary rounded-full p-2">
                    <BriefcaseIcon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">ABC Foundation</h3>
                </div>
                <p className="text-muted-foreground">
                  The ABC Foundation offers scholarships for students pursuing degrees in STEM fields, with a focus on
                  supporting underrepresented groups.
                </p>
                <div className="mt-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Explore Scholarships
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent rounded-full p-2">
                    <AwardIcon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Community Scholarships</h3>
                </div>
                <p className="text-muted-foreground">
                  Explore a wide range of community-based scholarships, including those focused on local organizations,
                  volunteer work, and extracurricular activities.
                </p>
                <div className="mt-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Explore Scholarships
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-full p-2">
                    <BriefcaseIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Industry Scholarships</h3>
                </div>
                <p className="text-muted-foreground">
                  Discover scholarships offered by leading companies and organizations in various industries, providing
                  opportunities for students to pursue their career goals.
                </p>
                <div className="mt-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Explore Scholarships
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-secondary rounded-full p-2">
                    <BookIcon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">International Scholarships</h3>
                </div>
                <p className="text-muted-foreground">
                  Explore scholarship opportunities for international students, including those focused on cultural
                  exchange, language learning, and global education.
                </p>
                <div className="mt-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Explore Scholarships
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent rounded-full p-2">
                    <AwardIcon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Minority Scholarships</h3>
                </div>
                <p className="text-muted-foreground">
                  Discover scholarships specifically designed to support underrepresented and minority students,
                  promoting diversity and inclusion in higher education.
                </p>
                <div className="mt-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Explore Scholarships
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; 2024 Scholarship Hub. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:underline underline-offset-4"
              prefetch={false}>
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:underline underline-offset-4"
              prefetch={false}>
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>)
  );
}

function AwardIcon(props) {
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
        d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>)
  );
}


function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>)
  );
}


function BriefcaseIcon(props) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>)
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
