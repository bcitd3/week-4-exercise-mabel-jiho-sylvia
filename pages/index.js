import React, {useState} from 'react';
import Header from '../comps/Header';
import BigCard from '../comps/BigCard';
import Button from '../comps/Button';
import Infocard from '../comps/Infocard/app';
import Slidercard from '../comps/Slidercard/app';
import PercentCard from '../comps/PercentCard';

export default function Home() {
    return <div>
        <Header/>
        <BigCard />
        <Button />
        <Infocard />
        <Slidercard Num="$52,023" MinValue="$46,900" MaxValue="$79,100" />
    </div>
}
