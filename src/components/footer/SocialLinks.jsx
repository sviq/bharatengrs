import { companyInfo } from '@/data/company-info'

export default function SocialLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        {companyInfo.socialLinks?.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={social.name}
          >
            {social.name}
          </a>
        ))}
      </div>
    </div>
  )
}

