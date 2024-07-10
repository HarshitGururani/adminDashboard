"use client";
import { MdSearch } from "react-icons/md";
import styles from "./Search.module.css";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
const Search = ({ placeholder }) => {
  const pathName = usePathname();
  const { replace } = useRouter();
  const searchParams = useParams();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }

    replace(`${pathName}?${params}`);
  }, 300);

  return (
    <div className={styles.container} onChange={handleSearch}>
      <MdSearch />
      <input
        type="text"
        name="search"
        id="search"
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};
export default Search;
