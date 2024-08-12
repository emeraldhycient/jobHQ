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



buildJobFilters(searchParams: URLSearchParams): Prisma.JobWhereInput {
  const filters: Prisma.JobWhereInput = {};

  const title = searchParams.get('title');
  const location = searchParams.get('location');
  const type: any = searchParams.get('type');
  const requirements = searchParams.getAll('requirements');
  const responsibilities = searchParams.getAll('responsibilities');
  const salaryRange = searchParams.get('salaryRange');
  const benefits = searchParams.getAll('benefits');
  const status: any = searchParams.get('status');
  const employerId = searchParams.get('employerId');

  if (title) {
    filters.title = { contains: title, mode: 'insensitive' };
  }

  if (location) {
    filters.location = { contains: location, mode: 'insensitive' };
  }

  if (type) {
    filters.type = type;
  }

  if (requirements.length > 0) {
    filters.requirements = { hasSome: requirements };
  }

  if (responsibilities.length > 0) {
    filters.responsibilities = { hasSome: responsibilities };
  }

  if (salaryRange) {
    filters.salaryRange = { contains: salaryRange, mode: 'insensitive' };
  }

  if (benefits.length > 0) {
    filters.benefits = { hasSome: benefits };
  }

  if (status) {
    filters.status = status;
  }

  if (employerId) {
    filters.employerId = employerId;
  }

  return filters;
}

}


export const utils = new Utils()