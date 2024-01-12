"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

import { SearchButton, SearchManufacturer } from ".";

interface SearchBarProps {
    setManufacturer: (manufacturer: string) => void;
    setModel: (model: string) => void;
}

export function SearchBar({ setManufacturer, setModel }: SearchBarProps) {
    const [searchManufacturer, setSearchManufacturer] = useState("");
    const [searchModel, setSearchModel] = useState("");

    function handleSearch(event: FormEvent) {
        event.preventDefault();

        if (searchManufacturer === "" && searchModel === "") {
            return alert("Please fill in the search bar");
        }

        setManufacturer(searchManufacturer.toLowerCase());
        setModel(searchModel.toLowerCase());
    }

    return (
        <form
            className="searchbar"
            onSubmit={handleSearch}
        >
            <div className="searchbar__item">
                <SearchManufacturer
                    selected={searchManufacturer}
                    setSelected={setSearchManufacturer}
                />

                <SearchButton
                    otherClasses="sm:hidden"
                />
            </div>

            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    alt="Car Model"
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"
                />

                <input
                    type="text"
                    name="model"
                    className="searchbar__input"
                    placeholder="Tiguan"
                    value={searchModel}
                    onChange={(event) => setSearchModel(event.target.value)}
                />

                <SearchButton
                    otherClasses="sm:hidden"
                />
            </div>

            <SearchButton
                otherClasses="max-sm:hidden"
            />
        </form>
    );
}
