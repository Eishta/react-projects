import React, { useState } from "react";
import json from '../data/birthday-reminders';
import ArticleList from "../common/ArticleList";
import Button from '../common/Button';
import '../styles/common.css';
import '../styles/birthday-reminder.css';

const BirthdayReminder = () => {
    const [people, setPeople] = useState(json);

    const clearAll = () => {
        setPeople([]);
    }
    return (
        <main className='birthday-reminder'>
            <section className='container'>
                <h3>Birthday Reminder</h3>
                <ArticleList listData={people} />
                <Button onclick={clearAll} text='Clear All' />
            </section>
        </main>
    )
}

export default BirthdayReminder;