'use client';

import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import useDebounce from '@/hooks/useDebounce';

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const router = useRouter();

  const debouncedSearchValue = useDebounce(searchValue, 800);

  useEffect(() => {
    const url =
      debouncedSearchValue.trim() === ''
        ? '/tickets'
        : `/tickets/?q=${encodeURIComponent(debouncedSearchValue)}`;
    router.push(url);
  }, [debouncedSearchValue, router]);

  return (
    <div className="relative w-full sm:w-80 md:w-96">
      <AiOutlineSearch
        className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400"
      />
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search tickets..."
        className="w-full bg-white/90 backdrop-blur-sm border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200
                   rounded-xl pl-12 pr-4 py-2.5 text-gray-700 placeholder-gray-400
                   shadow-sm transition-all duration-300 ease-in-out
                   hover:shadow-md focus:shadow-lg outline-none"
      />
    </div>
  );
};

export default SearchBox;
