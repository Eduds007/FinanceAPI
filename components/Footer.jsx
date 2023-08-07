export default function Footer() {
  return (
    <footer className="bg-gray-50 px-4 py-16 ">
      <div className="container flex flex-wrap items-center justify-center mx-auto  sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 items-center space-x-4 sm:space-x-8">
          <div className=" flex  items-center justify-center flex-shrink-0 w-12 h-12 rounded-full ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="200" height="200" />
              <rect
                width="780"
                height="240"
                transform="translate(-20 -20)"
                fill="white"
              />
              <path
                d="M0 180C0 168.954 8.95431 160 20 160H40V200H0V180Z"
                fill="#185C37"
              />
              <path
                d="M40 140C40 128.954 48.9543 120 60 120H80V200H40V140Z"
                fill="#107C42"
              />
              <path
                d="M80 100C80 88.9543 88.9543 80 100 80H120V200H80V100Z"
                fill="#21A366"
              />
              <path
                d="M120 60C120 48.9543 128.954 40 140 40H160V200H120V60Z"
                fill="#33C481"
              />
              <path
                d="M160 20C160 8.95431 168.954 0 180 0H200V180C200 191.046 191.046 200 180 200H160V20Z"
                fill="#61E3A7"
              />
            </svg>
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <a rel="noopener noreferrer" href="#">
                Termos de uso
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">
                Privacidade
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 items-center space-x-4 sm:space-x-8">
          <li>
            <a rel="noopener noreferrer" href="#">
              LinkedIn
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#">
              Discord
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#">
              Medium
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#">
              TabNews
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
