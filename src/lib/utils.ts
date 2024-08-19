import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import bcrypt from 'bcryptjs';
import { Prisma } from "@prisma/client";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export class Utils {

  // Convert URLs and emails to clickable links
  convertToLinks(text: string, urlColor: string = 'blue', emailColor: string = 'green'): string {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;

    return text
      .replace(urlPattern, `<a href="$1" target="_blank" rel="noopener noreferrer" style="color:${urlColor};">$1</a>`)
      .replace(emailPattern, `<a href="mailto:$1" target="_blank" rel="noopener noreferrer" style="color:${emailColor};">$1</a>`);
  }

  // Format date to a readable string
  formatDate(date: Date, locale: string = 'en-US', options?: Intl.DateTimeFormatOptions): string {
    return date.toLocaleDateString(locale, options);
  }

  // Generate a unique ID
  generateUniqueId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  // Validate email address
  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Capitalize the first letter of each word in a string
  capitalizeWords(text: string): string {
    return text.replace(/\b\w/g, char => char.toUpperCase());
  }

  formatText(text: string): string {
  // Split the text by underscores and convert to lowercase
  const words = text.toLowerCase().split('_');

  // Capitalize the first letter of each word
  const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

  // Join the words back together with spaces
  return formattedWords.join(' ');
}

  // Truncate string to a specified length with ellipsis
  truncateString(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }


 getPostedAtDateRange(option: string): Date | null {
  const now = new Date();

  switch (option) {
    case 'Last 24 Hours':
      return new Date(now.getTime() - 24 * 60 * 60 * 1000); // Subtract 24 hours
    case 'Last 7 Days':
      return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000); // Subtract 7 days
    case 'Last 30 Days':
      return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000); // Subtract 30 days
    default:
      return null; // No filter applied
  }
 }
  
 buildJobFilters(searchParams: URLSearchParams): Prisma.JobWhereInput {
  const filters: Prisma.JobWhereInput = {};

  const title = searchParams.get('title');
  const location = searchParams.get('location');
  const type = searchParams.get('type');
  const requirements = searchParams.get('requirements');
  const responsibilities = searchParams.get('responsibilities');
  const salaryRange = searchParams.get('salaryRange');
  const benefits = searchParams.get('benefits');
  const experience = searchParams.get('experience');
  const status = searchParams.get('status');
   const employerId = searchParams.get('employerId');
   const postedAt = searchParams.get('createdAt'); 


  if (title) {
    filters.title = { contains: title, mode: 'insensitive' };
  }

  if (location) {
    filters.location = { contains: location, mode: 'insensitive' };
  }

  if (type) {
    filters.type = type as Prisma.EnumJobTypeFilter;
  }
  if (experience) {
    filters.experience = type as Prisma.EnumExperienceLevelFilter;
  }

  if (requirements) {
    filters.requirements = { hasSome: requirements.split(',') }; // Handle comma-separated values
  }

  if (responsibilities) {
    filters.responsibilities = { hasSome: responsibilities.split(',') }; // Handle comma-separated values
  }

  if (salaryRange) {
    filters.salaryRange = { contains: salaryRange, mode: 'insensitive' };
  }

  if (benefits) {
    filters.benefits = { hasSome: benefits.split(',') }; // Handle comma-separated values
  }

  if (status) {
    filters.status = status as Prisma.EnumJobStatusFilter;
  }

  if (employerId) {
    filters.employerId = employerId;
  }
   
   if (postedAt) {
     const postedAtDate = this.getPostedAtDateRange(postedAt);
     if (postedAtDate) {
       filters.createdAt = { gte: postedAtDate }; // Filter jobs created after the calculated date
     }
   }

  return filters;
}


}


export const utils = new Utils()