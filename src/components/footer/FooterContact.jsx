import { companyInfo } from '@/data/company-info'

export default function FooterContact() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
      <ul className="space-y-2 text-gray-400">
        <li>{companyInfo.address}</li>
        <li>Phone: {companyInfo.phone}</li>
        <li>Email: {companyInfo.email}</li>
      </ul>
    </div>
  )
}

