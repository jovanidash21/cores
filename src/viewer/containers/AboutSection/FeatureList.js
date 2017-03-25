import React from 'react';

const FeatureList = () => {
    return (
        <div className="feature-list">
            <div className="row">
                <div className="6u 12u(mobile)">
                    <section>
                        <h3 className="icon fa-book">History</h3>
                        <p>
                            The National Computer Research and Engineering Symposium is an annual event organized
                            by the senior Computer Engineering students of Polytechnic University of the
                            Philippines – Manila. It is formerly known as ICT Conference, which had been annually
                            held for eight consecutive years, from 2004 to 2011
                        </p>
                    </section>
                </div>
                <div className="6u 12u(mobile)">
                    <section>
                        <h3 className="icon fa-lightbulb-o">Goal</h3>
                        <p>
                            Its primary goal is to gather students taking up IT-related courses from PUP as well
                            as other universities so as to impart to them the latest in the field of Information
                            and Communication Technology. It also highlights research presentations from the
                            students with the goal to inspire the participants to become innovators of technology.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
};

export default FeatureList;