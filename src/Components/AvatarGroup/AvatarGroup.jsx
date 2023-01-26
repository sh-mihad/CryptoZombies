import React from 'react';

const AvatarGroup = () => {
    return (
        <div className="avatar-group -space-x-6 mt-10 mb-3">
        <div className="avatar">
          <div className="w-12">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="avatar placeholder">
          <div className="w-12  bg-neutral-focus text-neutral-content">
            <span>+400k</span>
          </div>
        </div>
      </div>
    );
};

export default AvatarGroup;