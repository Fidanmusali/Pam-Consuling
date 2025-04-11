import React from 'react'
import './style.css'
import migration from '../../../../public/Icons/migration.png'

const MigrationMain = () => {
    return (
        <div>
            <div className="migrationMain">
                <div className="migrationMainImg">
                    <img src={migration} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MigrationMain